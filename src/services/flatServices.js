import db from "../firebase";
import {addDoc, collection, getDocs} from "firebase/firestore"

const flats = [
    {
        id: 1,
        userId: "a",
        flatName: "Noida 132",
        address: "Noida Sector 132",
        tenantName: "Rohit",
        tenantPhone: "0987654321",
        rent: 4000,
        startUnit: 32,
        pricePerUnit: 8,
        startDate: "01-02-2022",
        security: 8000,
    },
    {
        id: 2,
        userId: "b",
        flatName: "Noida 133",
        address: "Noida Sector 133",
        tenantName: "Rohan",
        tenantPhone: "0987654321",
        rent: 5000,
        startUnit: 56,
        pricePerUnit: 8,
        startDate: "01-05-2022",
        security: 10000,
    }
]

const payments = [
    {
        id: 100,
        flatId: 1,
        date: "01-02-2022",
        amount: 4000,
    },
    {
        id: 101,
        flatId: 1,
        date: "01-03-2022",
        amount: 4000,
    },
    {
        id: 102,
        flatId: 1,
        date: "01-04-2022",
        amount: 4000,
    },
    {
        id: 103,
        flatId: 1,
        date: "01-05-2022",
        amount: 4000,
    },
    {
        id: 104,
        flatId: 1,
        date: "01-06-2022",
        amount: 4000,
    },
    {
        id: 105,
        flatId: 1,
        date: "01-08-2022",
        amount: 4000,
    },
    {
        id: 106,
        flatId: 2,
        date: "01-05-2022",
        amount: 5000,
    },
    {
        id: 107,
        flatId: 2,
        date: "01-06-2022",
        amount: 5000,
    },
    {
        id: 108,
        flatId: 2,
        date: "01-07-2022",
        amount: 5000,
    },
    {
        id: 109,
        flatId: 2,
        date: "01-08-2022",
        amount: 5000,
    },
]

const rents = [
    {
        id: 200,
        flatId: 1,
        rent: 4000,
        startUnit: 32,
        endUnit: 59,
        date: "01-03-2022"
    },
    {
        id: 201,
        flatId: 1,
        rent: 4000,
        startUnit: 59,
        endUnit: 87,
        date: "01-04-2022"
    },
    {
        id: 202,
        flatId: 1,
        rent: 4000,
        startUnit: 87,
        endUnit: 106,
        date: "01-05-2022"
    },
    {
        id: 203,
        flatId: 1,
        rent: 4000,
        startUnit: 106,
        endUnit: 121,
        date: "01-06-2022"
    },
    {
        id: 204,
        flatId: 1,
        rent: 4000,
        startUnit: 121,
        endUnit: 149,
        date: "01-07-2022"
    },
    {
        id: 205,
        flatId: 1,
        rent: 4000,
        startUnit: 149,
        endUnit: 192,
        date: "01-08-2022"
    },
    {
        id: 206,
        flatId: 1,
        rent: 4000,
        startUnit: 192,
        endUnit: 232,
        date: "01-09-2022"
    },

    {
        id: 207,
        flatId: 2,
        rent: 5000,
        startUnit: 56,
        endUnit: 86,
        date: "01-06-2022",
    },
    {
        id: 208,
        flatId: 2,
        rent: 5000,
        startUnit: 86,
        endUnit: 100,
        date: "01-07-2022",

    },
    {
        id: 209,
        flatId: 2,
        rent: 5000,
        startUnit: 100,
        endUnit: 125,
        date: "01-08-2022",

    },
    {
        id: 210,
        flatId: 2,
        rent: 5000,
        startUnit: 125,
        endUnit: 155,
        date: "01-09-2022",

    }

]

export async function addFlatToFirebase(flat) {
    await addDoc(collection(db, "flats"), flat);
}

export async function getFlats() {
    const documents = await getDocs(collection(db, "flats"))
    const flats = documents.docs.map(doc => ({
        ...doc.data(), id: doc.id
    }));
    console.log(flats);
    return flats;
}

export async function addPaymentToFirebase(payment) {
    await addDoc(collection(db, "payments"), payment);
}

export async function getPayments() {
    const documents = await getDocs(collection(db, "payments"))
    const payments = documents.docs.map(doc => ({
        ...doc.data(), id: doc.id
    }));
    console.log(payments);
    return payments;
}

export async function addRentToFirebase(rent) {
    await addDoc(collection(db, "rents"), rent);
}

export async function getRents() {
    const documents = await getDocs(collection(db, "rents"))
    const rents = documents.docs.map(doc => doc.data());
    console.log(rents);
    return rents;
}

