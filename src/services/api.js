import axios from "axios"

const BASE_URL = "https://674ca20554e1fca9290d2451.mockapi.io/properties/properties"

export const fetchProperties = () => axios.get(BASE_URL);
export const fetchPropertyById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createProperty = (data) => axios.post(BASE_URL, data);
export const updateProperty = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteProperty = (id) => axios.delete(`${BASE_URL}/${id}`);

// export const properties = [
//     {
//         id: "1",
//         title: "Modern Villa",
//         type: "Villa",
//         purpose: "Buy",
//         price: 100,
//         status: "Available",
//         description: "Beautiful villa in Colombo."
//     },
//     {
//         id: "2",
//         title: "Cozy Apartment",
//         type: "Apartment",
//         purpose: "Rent",
//         price: 50,
//         status: "Available",
//         description: "A cozy apartment located in the heart of the city."
//     },
//     {
//         id: "3",
//         title: "Luxury Penthouse",
//         type: "Penthouse",
//         purpose: "Buy",
//         price: 500,
//         status: "Sold",
//         description: "A luxurious penthouse with stunning city views."
//     },
//     {
//         id: "4",
//         title: "Beachside Cottage",
//         type: "Cottage",
//         purpose: "Rent",
//         price: 75,
//         status: "Available",
//         description: "Charming cottage with direct beach access."
//     },
//     {
//         id: "5",
//         title: "Suburban Family Home",
//         type: "House",
//         purpose: "Buy",
//         price: 200,
//         status: "Pending",
//         description: "A spacious home perfect for families in a quiet suburb."
//     }
// ];
