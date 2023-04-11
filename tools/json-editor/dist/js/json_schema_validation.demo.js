// 参见：
// http://json-schema.org/

const schema = {
  title: 'Employee',
  description: 'Object containing employee details',
  type: 'object',
  properties: {
    firstName: {
      title: 'First Name',
      description: 'The given name.',
      examples: [
        'John'
      ],
      type: 'string'
    },
    lastName: {
      title: 'Last Name',
      description: 'The family name.',
      examples: [
        'Smith'
      ],
      type: 'string'
    },
    gender: {
      title: 'Gender',
      enum: ['male', 'female']
    },
    availableToHire: {
      type: 'boolean',
      default: false
    },
    age: {
      description: 'Age in years',
      type: 'integer',
      minimum: 0,
      examples: [28, 32]
    },
    job: {
      $ref: 'job'
    }
  },
  required: ['firstName', 'lastName']
}

const job = {
  title: 'Job description',
  type: 'object',
  required: ['address'],
  properties: {
    company: {
      type: 'string',
      examples: [
        'ACME',
        'Dexter Industries'
      ]
    },
    role: {
      description: 'Job title.',
      type: 'string',
      examples: [
        'Human Resources Coordinator',
        'Software Developer'
      ],
      default: 'Software Developer'
    },
    address: {
      type: 'string'
    },
    salary: {
      type: 'number',
      minimum: 120,
      examples: [100, 110, 120]
    }
  }
}

const json = {
  firstName: 'John',
  lastName: 'Doe',
  gender: null,
  age: '28',
  availableToHire: true,
  job: {
    company: 'freelance',
    role: 'developer',
    salary: 100
  }
}

const options = {
  schema: schema,
  schemaRefs: { job: job },
  // mode: 'tree',
  mode: 'code',
  modes: ['code', 'text', 'tree', 'preview']
}

// create the editor
const container = document.getElementById('jsoneditor')
const editor = new window.JSONEditor(container, options, json)
window.editor = editor
