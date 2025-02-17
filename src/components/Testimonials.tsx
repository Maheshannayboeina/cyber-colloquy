// "use client";
// import Image from "next/image";
// import { Container } from "@/components/Container";

// import userOneImg from "../../public/img/user1.jpg";
// import userTwoImg from "../../public/img/user2.jpg";
// import userThreeImg from "../../public/img/user3.jpg";

// export const Testimonials = () => {
//   return (
//     <Container>
//       <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
//         <div className="lg:col-span-2 xl:col-auto">
//           <div className="flex flex-col justify-between w-full h-full bg-trueGray-800 px-14 rounded-2xl py-14">
//             <p className="text-2xl leading-normal ">
//               "The events I've attended have consistently provided valuable insights and practical knowledge to improve my skill set."
//             </p>

//             <Avatar
//               image={userOneImg}
//               name="Archita Jain"
//               title="Student at Shah and Anchor"
//             />
//           </div>
//         </div>
//         <div className="">
//           <div className="flex flex-col justify-between w-full h-full bg-trueGray-800 px-14 rounded-2xl py-14">
//             <p className="text-2xl leading-normal ">
//               "I greatly appreciate the high quality of speakers and the networking opportunities that were present in these events"
//             </p>

//             <Avatar
//               image={userTwoImg}
//               name="Mahesh Annayboeina"
//               title="Faculty at Shah and Anchor"
//             />
//           </div>
//         </div>
//         <div className="">
//           <div className="flex flex-col justify-between w-full h-full bg-trueGray-800 px-14 rounded-2xl py-14">
//             <p className="text-2xl leading-normal ">
//               "I highly recommend this platform to anyone that is looking to explore the different areas of cybersecurity and wants to improve their expertise."
//             </p>

//             <Avatar
//               image={userThreeImg}
//               name="Saahil Sawant"
//               title="Alumnus of Shah and Anchor"
//             />
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// interface AvatarProps {
//   image: any;
//   name: string;
//   title: string;
// }

// function Avatar(props: Readonly<AvatarProps>) {
//   return (
//     <div className="flex items-center mt-8 space-x-3">
//       <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
//         <Image
//           src={props.image}
//           width="40"
//           height="40"
//           alt="Avatar"
//           placeholder="blur"
//         />
//       </div>
//       <div>
//         <div className="text-lg font-medium">{props.name}</div>
//         <div className="text-gray-400">{props.title}</div>
//       </div>
//     </div>
//   );
// }