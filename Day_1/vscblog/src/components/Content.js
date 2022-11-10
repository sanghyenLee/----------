import { useContext } from "react";
import styled from "styled-components";
import Appcontext from "../context/Appcontext";
import Accordion from "./Accordion";

export default function Content({ type, title, children, path }) {
  const { setSelectedPost, setOpenPost, openPost, selectedPost } =
    useContext(Appcontext);

  function selectedFunction() {
    setSelectedPost(path);
    if (!openPost.includes(path)) {
      setOpenPost([...openPost, path]);
    }
  }

  return type === "directory" ? (
    <Accordion title={`📂${title}`}>
      {children?.map((one, index) => (
        <Content {...one} key={index} />
      ))}
    </Accordion>
  ) : (
    <PostWrap
      onClick={selectedFunction}
      className={selectedPost === path ? "selected" : ""}
    >
      &nbsp;&nbsp;📝{title}
    </PostWrap>
  );
}

const PostWrap = styled.div`
  cursor: pointer;

  &:not(.selected):hover {
    background-color: ${({theme}) => theme.color.hover};
  }

  &.selected{
    background-color: ${({theme}) => theme.color.selected};
  }

`;
