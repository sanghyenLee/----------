import React, { useContext } from 'react'
import styled from 'styled-components';
import Appcontext from '../context/Appcontext';

export default function PostWrap({path,title,isClose}) {
    const { setSelectedPost, setOpenPost, openPost, selectedPost } =
    useContext(Appcontext);
    function selectedFunction() {
    setSelectedPost(path);
    if (!openPost.includes(path)) {
        setOpenPost([...openPost, path]);
    }
    }
      return (
    <PostWrapStyled onClick={selectedFunction}
    className={selectedPost === path ? "selected" : ""}
    >
        &nbsp;&nbsp;
        <span className={isClose && selectedPost === path ? "visible" : "" }
        
        onClick={(e) => {
            e.stopPropagation();
            const openPostFilter = openPost.filter(
              (one) => one !== path
            );
            setOpenPost(openPost.filter((one) => one !== path));

            setSelectedPost(
              openPostFilter.length !== 0
                ? openPostFilter[0]
                : null
            );
          }}
          >&#215;</span>
        &nbsp;&nbsp;📝{title}
    
    </PostWrapStyled>
  )
}


const PostWrapStyled = styled.div`
  padding:  5px 0;
  cursor: pointer;
    position: relative;
  &:not(.selected):hover {
    background-color: ${({theme}) => theme.color.hover};
  }

  &.selected{
    background-color: ${({theme}) => theme.color.selected};
  }
  &:hover > span{
    display: block;
  }

  > span {
    display: none;
    position: absolute;
    left: 5px;
    top: 4px;

    &.visible{
        display: block;
    }
  }

`;
