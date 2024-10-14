import { Form } from '@formio/react'
import "formiojs/dist/formio.full.min.css"
import { schema } from './schema';
import { useState } from 'react';

const App = () => {

  const [data, setData] = useState({});

  const handleSubmitForm = (formData) => {
    setData(formData)
  }

  return (
    <div className='container' style={{ width: '1224px', margin: 'auto', padding: '32px 8px' }}>
      <div className='row'>
        <Form
          form={schema}
          options={{ noAlerts: true }}
          onSubmit={handleSubmitForm}
        />
      </div>
      <div style={{ fontSize: '12px', padding: '12px', borderRadius: '8px' }} dir='ltr' className='bg-info mt-4'>
        {JSON.stringify(data.data)}
      </div>
    </div>
  )
}

export default App