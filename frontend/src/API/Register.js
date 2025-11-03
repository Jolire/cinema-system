import { toast } from "react-toastify";

async function Register(BASE_URL, formData) {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            toast.success("✅ Registration successful! You can now login.");
            return true;
        } else {
            toast.error("❌ Registration failed. Email may already be used.");
            return false;
        }
    } catch (error) {
        console.error(error);
        toast.error("❌ Error occurred during registration!");
        return false;
    }
}

export default Register;
