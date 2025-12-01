Interview Questions – TypeScript Explained (Bangla)
1. Interface এবং Type এর মধ্যে পার্থক্য কী?

TypeScript-এ interface এবং type alias–দুটোই object-এর structure define করতে ব্যবহৃত হয়, কিন্তু এদের মাঝে কিছু গুরুত্বপূর্ণ পার্থক্য আছে।

✔ Interface

Object structure define করতে সবচেয়ে বেশি ব্যবহার হয়

Extend করা যায় (inheritance)

একই নামে একাধিক interface ডিক্লেয়ার করলে তারা merge হয়ে যায় (Declaration Merging)

✔ Type

Primitive, Union, Tuple, Function—সব কিছু define করতে পারে

Extend করা যায় (& ব্যবহার করে)

Declaration merging হয় না

More flexible

সংক্ষেপে পার্থক্য
Feature	Interface	Type
Declaration Merging	✔ Yes	❌ No
Supports primitives	❌ No	✔ Yes
Extend করা যায়	✔ Yes (extends)	✔ Yes (& দিয়ে)
Flexibility	Medium	High
2. keyof কীওয়ার্ডের ব্যবহার কী? একটি উদাহরণ দিন।

keyof এমন একটি keyword যেটি কোনো object type-এর সব property name কে union হিসেবে রিটার্ন করে।

উদাহরণ
interface User {
  name: string;
  age: number;
}

type UserKeys = keyof User;
// UserKeys = "name" | "age"


এটি মূলত type-safe property access নিশ্চিত করতে ব্যবহৃত হয়।

3. any, unknown এবং never এর মধ্যে পার্থক্য কী?
✔ any

যেকোনো টাইপ করা যায়

Type safety নেই

ভুল হলেও TypeScript error দেখায় না

সবচেয়ে কম নিরাপদ টাইপ

✔ unknown

any এর মতো সব ধরনের মান রাখা যায়

কিন্তু কোনো operation করতে গেলে type checking করতে হয়

any এর চেয়ে অনেক নিরাপদ

✔ never

এমন কিছু represent করে যা কখনো ঘটে না

যেমন: function যা কখনো return করে না (infinite loop বা error throw করে)

সংক্ষেপে পার্থক্য
Type	Description
any	সব কিছু allowed, কোনো type-check নেই
unknown	সব কিছু রাখা যায়, কিন্তু ব্যবহারের আগে type-check লাগে
never	কখনো return হয় না এমন পরিস্থিতি
4. Enum কী? একটি numeric এবং string enum এর উদাহরণ দিন।

Enum হলো TypeScript-এর একটি feature, যা fixed set of values নিয়ে কাজ করতে সাহায্য করে।

✔ Numeric Enum Example
enum Status {
  Active = 1,
  Inactive = 2,
  Pending = 3,
}

✔ String Enum Example
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST"
}


Enum ব্যবহারে fixed values নিয়ে কাজ করা সহজ ও type-safe হয়।

5. Union এবং Intersection Types এর উদাহরণ দিন।
✔ Union Type

একটি ভ্যারিয়েবল একাধিক টাইপ গ্রহণ করতে পারে।

let id: string | number;
id = 101;
id = "AB101";

✔ Intersection Type

একাধিক টাইপকে merge (combine) করে।

type Person = { name: string };
type Employee = { employeeId: number };

type Staff = Person & Employee;

const staff: Staff = {
  name: "John",
  employeeId: 202
};


Union → OR
Intersection → AND