import { BsTrash2 } from "react-icons/bs";
import { useMutation } from "@apollo/client";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import { IconButton } from "../like-button/LikeButton.styled";
import { DELETE_POST } from "graphql/mutations/deletePost";
import { FETCH_POSTS } from "graphql/queries/fetchPosts";

function DeleteButton({ id }) {
  const navigate = useNavigate();
  const [deletePost] = useMutation(DELETE_POST);

  function handleDelete() {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (res) => {
      if (res.isConfirmed) {
        const res = await deletePost({
          variables: { postId: id },
          update: (proxy, result) => {
            navigate("/");

            const data = proxy.readQuery({ query: FETCH_POSTS });

            proxy.writeQuery({
              query: FETCH_POSTS,
              data: {
                getPosts: [result.data.deletePost, ...data.getPosts],
              },
            });
          },
        });
        Swal.fire("Deleted", "Your post has been deleted.", "success");
      }
    });
  }

  return (
    <IconButton tw='bg-red-100 hover:(bg-red-200)' onClick={handleDelete}>
      <BsTrash2 />
    </IconButton>
  );
}

export default DeleteButton;
