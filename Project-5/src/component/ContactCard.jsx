import { deleteDoc, doc } from "firebase/firestore";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { db } from "../config/Firebase";
import AddAndUpdateContact from "./AddAndUpdateContact";
import useDisclose from "../hooks/useDisclose";
import { toast } from "react-toastify";

const ContactCard = ({ contact }) => {
  const { isOpen, onClose, onOpen } = useDisclose();

  const deletContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Contact Delet Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={contact.id}
        className="bg-yellow flex justify-spcace-between items-center p-2 rounded-lg m-2"
      >
        <div className="flex gap-4 w-56">
          <FaRegCircleUser className="text-orange text-4xl w-10" />
          <div className="text-black w-44 truncate">
            <h2 className="text-medium">{contact.name}</h2>
            <p className="text-sm">{contact.email}</p>
          </div>
        </div>

        <div className="flex text-3xl ml-4">
          <MdModeEdit onClick={onOpen} className="text-gray cursor-pointer" />
          <MdDelete
            onClick={() => deletContact(contact.id)}
            className="text-purple cursor-pointer"
          />
        </div>
      </div>

      <AddAndUpdateContact
        contact={contact}
        isUpdate
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  );
};

export default ContactCard;
