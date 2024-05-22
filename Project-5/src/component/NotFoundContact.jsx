import image from "../../public/Contact.png";

const NotFoundContact = () => {
  return (
    <div className="flex h-[80vh] justify-center items-center gap-3">
      <div>
        <img src={image} alt="contact-img" />
      </div>
      <h3 className="text-white text-2xl font-bold">Contact Not Found</h3>
    </div>
  );
};

export default NotFoundContact;
