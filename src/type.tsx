export type FormError = {
	name: string;
	email: string;
	phone: string;
	pass: string;
	noErr:string,
};

export type AuthContextType = {
	formError: FormError;
	setFormError: React.Dispatch<React.SetStateAction<FormError>>;
};

export type Props = {
	children: React.ReactNode;
};
