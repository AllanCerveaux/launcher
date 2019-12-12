import * as yup from 'yup'

const signInSchema = yup.object().shape({
	email: yup
		.string()
		.required()
		.email(),
	password: yup
		.string()
		.required()
})

const signUpSchema = yup.object().shape({
	firstName: yup
		.string()
		.required(),
	email: yup
		.string()
		.trim()
		.email()
		.required(),
	password: yup
		.string()
		.min(8)
		.max(32)
		.matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
		.required(),
	photoUrl: yup
		.string()
		.url()
})

export { signInSchema, signUpSchema }