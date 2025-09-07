import React from 'react'

function Manage({ field, onDelete }) {
  if (!field) return null

  const f = field
  return (
    <div className="field-card">
      <img src={f.img} alt={f.field} />
      <div className="field-meta">
        <h3>{f.field} <small style={{ color: '#666', marginLeft: 8 }}>· {f.size}</small></h3>
        <p>{f.location}</p>
        <p style={{ marginTop: 8 }}>{f.description}</p>
        <p style={{ marginTop: 6 }}><strong>Amenities:</strong> {Array.isArray(f.amenities) ? f.amenities.join(', ') : f.amenities}</p>
      </div>
      <div className="field-actions">
        <div>${f.price}</div>
        <div style={{ color: '#f59e0b' }}>★ {f.rating ?? '—'}</div>
        <button className="delete" onClick={() => onDelete && onDelete(f.id ?? f._id)}>Delete</button>
      </div>
    </div>
  )
}

export default Manage