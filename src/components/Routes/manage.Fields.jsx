import React, { useEffect, useState } from 'react';
import '../css/manage.Fields.css';
import Manage from '../component/manage'

export default function ManageFields({ user }) {
  const [fields, setFields] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    field: '',
    location: '',
    price: '',
    img: '',
    description: '',
    size: '',
    amenities: '',
    rating: '',
  });

  useEffect(() => {
    if (!user || user.role !== 'admin') return;
    fetchFields();
  }, [user]);

  const fetchFields = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/api/users');
      const data = await res.json();
      setFields(Array.isArray(data) ? data : data.fields || []);
    } catch (err) {
      console.error('failed to load fields', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!id) return;
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/admin/fields/${id}`, { method: 'DELETE' });
      if (res.ok) fetchFields();
      else console.error('delete failed', res.status);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = {
        ...form,
        price: Number(form.price),
        rating: Number(form.rating) || 0,
        amenities: form.amenities ? form.amenities.split(',').map(s => s.trim()) : [],
      };
      const res = await fetch('http://localhost:3000/api/admin/fields', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setForm({ field: '', location: '', price: '', img: '', description: '', size: '', amenities: '', rating: '' });
        fetchFields();
      } else {
        console.error('add failed', await res.text());
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!user) return <div>Please login to manage fields.</div>;
  if (user.role !== 'admin') return <div>Access denied. Admins only.</div>;

  return (
    <div className="manage-fields">
      <h2>Manage Fields</h2>
      <form onSubmit={handleAdd} className="form-row">
        <input placeholder="Field name" value={form.field} onChange={e => setForm(f => ({ ...f, field: e.target.value }))} />
        <input placeholder="Location" value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} />
        <input placeholder="Price" value={form.price} onChange={e => setForm(f => ({ ...f, price: e.target.value }))} />
        <input placeholder="Image URL" value={form.img} onChange={e => setForm(f => ({ ...f, img: e.target.value }))} />
        <input placeholder="Description" value={form.description} onChange={e => setForm(f => ({ ...f, description: e.target.value }))} />
        <input placeholder="Size (e.g. 105x68)" value={form.size} onChange={e => setForm(f => ({ ...f, size: e.target.value }))} />
        <input placeholder="Amenities (comma separated)" value={form.amenities} onChange={e => setForm(f => ({ ...f, amenities: e.target.value }))} />
        <input placeholder="Rating" value={form.rating} onChange={e => setForm(f => ({ ...f, rating: e.target.value }))} />
        <button type="submit" onClick={handleAdd}>Add Field</button>
      </form>

      {loading && <div>Loading...</div>}

      <div className="fields-grid">
        {fields.map(f => (
          <Manage key={f.id ?? f._id} field={f} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
