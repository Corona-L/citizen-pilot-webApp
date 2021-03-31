export type report = {
  category: string;
  description: string;
  latitude: number;
  longitude: number;
  urgency: boolean;
  image: string;
  Fname: string;
  Lname: string;
  email: string;
};

// export type report = {
//   category: string;
//   createdAt: string;
//   description: string;
//   id: number;
//   image: string;
//   latitude: number;
//   longitude: number;
//   updatedAt: string;
//   urgency: boolean;
//   user: {
//     createdAt: string;
//     email: string;
//     favourites: null
//     fname: string;
//     id: number;
//     lname: string;
//     updatedAt: string;
//     voted: null
//   }
// };

export type proposal = {
  title: string;
  description: string;
  location: string;
  image: string;
  votes: number;
  approved: boolean;
  userId: number;
};

export type project = {
  title: string;
  description: string;
  location: string;
  completion: number;
  image: string;
};
