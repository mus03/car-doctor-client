
import person from "../../../assets/images/about_us/person.jpg"
import parts from "../../../assets/images/about_us/parts.jpg"

const AboutUs = () => {
    return (
        <div className="hero min-h-screen my-4 rounded-xl px-0 mx-0 ">
  <div className="hero-content flex-col justify-between h-[70%] lg:flex-row">
    <div className="flex-row relative h-full">
    <img
      src={person}
      className="max-w-lg rounded-lg shadow-2xl" />
       <img
      src={parts}
      className="absolute top-48 left-44 border-8 bg-gray-500 border-white max-w-sm rounded-lg shadow-2xl" />
    </div>
    <div className="w-1/2 space-y-4">
      <h1 className="text-xl font-bold text-orange-600">About Us</h1>
      <p className="text-5xl font-bold w-1/2 ">
      We are qualified & of experience in this field
      </p>
      <p className="space-y-4 py-2 ">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      
      <br />
      The majority have suffered alteration in some form, by injected humour, or randomised words which donot look even slightly believable. </p>
      <button className="btn bg-orange-600 text-white">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default AboutUs;