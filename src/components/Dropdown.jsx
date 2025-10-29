import styled from 'styled-components';

function Dropdown() {
  return (
    <>
      <DropdownWrap>
        <DropdownButton>최신순</DropdownButton>
        <DropdownList>
          <li>최신순</li>
          <li>좋아요순</li>
        </DropdownList>
      </DropdownWrap>
    </>
  );
}

export default Dropdown;

const DropdownWrap = styled.div`
  position: relative;
  width: 130px;
`;

const DropdownButton = styled.button`
  width: 130px;
  padding: 10px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid#e5e7eb;
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 30px;

  width: 130px;
  border: 1px solid #000;
`;
