const formatValue = (
    param: string | number | boolean
): string | number | boolean => {
    if (typeof param === "string") {
        return param.toUpperCase();
    } else if (typeof param === "number") {
        return param * 10;
    } else if (typeof param === "boolean") {
        return !param;
    } else {
        return 0;
    }
};

const getLength = (param: string | unknown[]) => {
    if (typeof param === "string") {
        return param.length;
    } else if (Array.isArray(param)) {
        return param.length;
    } else {
        return 0;
    }
};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

type Item = {
    title: string;
    rating: number;
};

const filterByRating = (items: Item[]): Item[] => {
    return items.filter((item) => item.rating >= 4);
};

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter((user) => user.isActive === true);
};

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
    const availability = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
};

function getUniqueValues<T extends number | string>(
    array1: T[],
    array2: T[]
): T[] {
    const result: T[] = [];

    function exists(value: T): boolean {
        for (let i = 0; i < result.length; i++) {
            if (result[i] === value) {
                return true;
            }
        }
        return false;
    }

    for (let i = 0; i < array1.length; i++) {
        if (!exists(array1[i])) {
            result.push(array1[i]);
        }
    }

    for (let i = 0; i < array2.length; i++) {
        if (!exists(array2[i])) {
            result.push(array2[i]);
        }
    }
    return result;
}

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products
        .map((product) => {
            const baseTotal = product.price * product.quantity;

            if (product.discount) {
                const discountAmount = (baseTotal * product.discount) / 100;
                return baseTotal - discountAmount;
            }
            return baseTotal;
        })
        .reduce((sum, current) => sum + current, 0);
};
