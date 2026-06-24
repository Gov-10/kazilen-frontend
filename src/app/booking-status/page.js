"use client";

import { useState, useEffect } from "react";
import { apiRequest } from "@/utils/api";
import { getCookie } from "@/utils/customCookie";

export default function BookingStatusPage() {
	const [bookingData, setBookingData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchBooking = async () => {
			try {
				const userId = await getCookie("userId");
				const data = await apiRequest("/get-book-status", "post", {
					userId: userId,
				});
				// Assuming backend returns: { name: "...", price: 0, location: "..." }
				setBookingData(data);
			} catch (err) {
				console.error("Failed to fetch booking status:", err);
				setError("Could not load booking details.");
			} finally {
				setIsLoading(false);
			}
		};
		fetchBooking();
	}, []);

	if (isLoading) return <main className="p-4">Loading...</main>;
	if (error || !bookingData)
		return <main className="p-4">{error || "No data"}</main>;

	return (
		<main className="min-h-screen bg-gray-100 p-4">
			<div className="max-w-xl mx-auto bg-white rounded-2xl p-6 shadow-sm space-y-4">
				<div className="space-y-1">
					<p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
						Worker
					</p>
					<p className="text-xl font-bold text-gray-900">{bookingData.name}</p>
				</div>

				<div className="space-y-1">
					<p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
						Location
					</p>
					<p className="text-gray-700">{bookingData.location}</p>
				</div>

				<div className="space-y-1">
					<p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
						Price
					</p>
					<p className="text-2xl font-extrabold text-green-600">
						₹{bookingData.price}
					</p>
				</div>
			</div>
		</main>
	);
}
