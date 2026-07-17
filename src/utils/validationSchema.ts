import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required'),

  email: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),

  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
})
export const registerData = yup.object().shape({

  taskName: yup

    .string()

    .required("Task name is required"),

  taskDescription: yup

    .string()

    .required("Task description is required")

    .min(10, "Description should be at least 10 characters"),

  dueDate: yup

    .string()

    .required("Due date is required"),

  priority: yup

    .string()

    .oneOf(["low", "medium", "high"])

    .required("Priority is required"),

});