// Task 14

function fetchMessage(): Promise<string> {
  return new Promise((resolve) => {
    resolve("Hello from server!");
  });
}

fetchMessage().then((message) => console.log(message));

// Task 16
interface UserProfile {
  username: string;
  age: number;
  isAdmin: true;
}

function fetchProfile(): Promise<UserProfile> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ username: "max_123", age: 28, isAdmin: true });
    }, 1000);
  });
}

fetchProfile().then((profile) => console.log(profile));

// Task 17

interface Users {
  address: {
    city: string;
    geo: { lat: string; lng: string };
    street: string;
    suite: string;
    zipcode: string;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
    email: string;
  };
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

const fetchUsers = async (): Promise<Users[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

fetchUsers().then((users) => {
  console.log("Users by Fetch");
  console.log(users);
});

// Task 18
import axios from "axios";

const fetchUsers2 = async (): Promise<Users[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users",
  );
  return response.data;
};

const getUsers = async () => {
  const users = await fetchUsers2();
  console.log("Users by axios");
  console.log(users);
};

getUsers();

// Task 20

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
};

async function logThreePosts() {
  const data = (await fetchPosts()).slice(0, 3).forEach(() => {});
  console.log(data);
}

logThreePosts();
