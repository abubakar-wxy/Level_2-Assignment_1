# TypeScript Interview Questions Explained In (Bangla)

সবগুলো প্রশ্নের উত্তর বাংলায় ব্যাখ্যা করা হলো।

---

## **1. Interfaces এবং Types এর মধ্যে পার্থক্য**

TypeScript-এ Interface এবং Type Alias দুটিই অবজেক্টের শেপ বা স্ট্রাকচার ডিফাইন করতে ব্যবহৃত হয়, কিন্তু তাদের মধ্যে কিছু মৌলিক পার্থক্য আছে:

### **Interfaces**

* বিশেষভাবে অবজেক্টের স্ট্রাকচার ডিফাইন করার জন্য তৈরি।
* একাধিকবার ডিক্লেয়ার করলে অটোমেটিকভাবে merge হয়ে যায়।
* `extends` ব্যবহার করে অন্য interface কে extend করা যায়।

### **Types**

* Primitive, Union, Intersection, Function, Tuple—প্রায় সবকিছুতেই ব্যবহার করা যায়।
* পুনরায় declare করলে error দেয়—merge হয় না।
* `&` দিয়ে multiple type combine করা যায়।

### **সংক্ষিপ্ত পার্থক্য:**

| Interface                                   | Type                                     |
| ------------------------------------------- | ---------------------------------------- |
| Merge হয়                                   | Merge হয় না                             |
| শুধুমাত্র object, class, function structure | Union, intersection, primitives সব সম্ভব |
| `extends` keyword                           | `&` operator                             |

---

## **2. keyof এর ব্যবহার উদাহরণসহ**

`keyof` কোনো object-type এর সমস্ত key কে একটি union type হিসেবে বের করে আনে।

### **উদাহরণ:**

```ts
interface User {
  name: string;
  age: number;
  email: string;
}

type UserKeys = keyof User; // "name" | "age" | "email"
```

### **ব্যবহার:**

```ts
function getProperty<T>(obj: T, key: keyof T) {
  return obj[key];
}

const user = { name: "Abu Bakar", age: 20 };
console.log(getProperty(user, "name"));
```

এভাবে আপনি নিশ্চিত হচ্ছেন যে শুধুমাত্র valid key-ই পাস হবে।

---

## **3. any, unknown, never এর পার্থক্য**

TypeScript-এ এগুলো special types এবং আলাদা উদ্দেশ্যে ব্যবহার হয়।

### **any**

* Type checking বন্ধ করে দেয়।
* যেকোনো কিছু assign করা যায়।
* ভুল ধরতে পারে না → dangerous।

### **unknown**

* নিরাপদ any।
* যেকোনো কিছু রাখা যায় কিন্তু ব্যবহার করতে চাইলে type-check লাগবে।

### **never**

* কখনো কোনো value থাকে না।
* এমন function যেটা কখনো return করে না (error throw / infinite loop)।

### **সংক্ষিপ্ত পার্থক্য:**

| any                  | unknown                      | never          |
| -------------------- | ---------------------------- | -------------- |
| কিছুই checked হয় না | ব্যবহার করতে type-check লাগে | কোনো value নেই |
| Unsafe               | Safe                         | Impossible     |

---

## **4. Enums এর ব্যবহার (Numeric & String Enum)**

Enum হলো TypeScript-এর একটি feature যেটা constant value set তৈরি করতে ব্যবহৃত হয়।

### **Numeric Enum:**

```ts
enum Status {
  Success = 1,
  Failed = 0,
}
```

### **String Enum:**

```ts
enum Roles {
  Admin = "ADMIN",
  User = "USER",
}
```

### **ব্যবহার:**

```ts
function checkStatus(status: Status) {
  if (status === Status.Success) console.log("Success");
}
```

---

## **5. Union এবং Intersection Type এর উদাহরণ**

### **Union Type (A বা B)**

```ts
type ID = number | string;
let userId: ID = 10;
userId = "AB-01";
```

### **Intersection Type (A + B একসাথে)**

```ts
type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staff: Staff = {
  name: "Abu Bakar",
  employeeId: 101,
};
```

---

## **সমাপ্তি**

এই প্রশ্নগুলো TypeScript interview-এ খুবই common এবং foundational concepts বোঝার জন্য অত্যন্ত গুরুত্বপূর্ণ।
