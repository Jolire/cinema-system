import { toast } from "react-toastify";

async function BuyTickets(BASE_URL, formData) {
    try {
        const response = await fetch(`${BASE_URL}/order`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const order = await response.json();

            const seatNumber = order.seatNumber !== undefined ? order.seatNumber : order.seat;
            const movieTitle = order.movieTitle || order.title || "Unknown";
            const runtime = order.runtime || order.movieRuntime || "Unknown";
            const price = order.price || order.moviePrice || "Unknown";

            toast.success(
                `✅ Order successful!\n🎬 Movie: ${movieTitle}\n💺 Seat: ${Number(seatNumber) + 1}\n🕒 Time: ${runtime}\n💰 Price: $${price}`,
                { autoClose: 8000 }
            );

            return order;
        } else {
            toast.error("❌ Order failed! Please check seat availability or try again.");
            return null;
        }
    } catch (error) {
        console.error(error);
        toast.error("❌ Error occurred while ordering tickets!");
        return null;
    }
}

export default BuyTickets;
