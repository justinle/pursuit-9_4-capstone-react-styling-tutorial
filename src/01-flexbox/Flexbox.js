import './styles.scss'
import styled from 'styled-components';

const Container = styled.div`
  .flex-container {
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    min-height: 320px;
  }
  .image {
    border-radius: 100%;
    border: 10px solid orange;
  }
  .left-section {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .right-section {
  
  }
`;

const ProfileBox = () => {
  return (
    <div className="flex-container">
      <div className="left-section">
        <div className="profile">
          <img src="https://fakeimg.pl/160x160" className="image" width="160" height="160"/>
        </div>
        <div className="links">
          links
        </div>
      </div>
      <div className="right-section">
        <div className="title">
        Title
        </div>
        <div className="body">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam amet architecto commodi consequuntur culpa cum libero, modi natus nostrum nulla omnis optio porro quibusdam repellat repudiandae sunt ullam voluptatibus.
        </div>
      </div>
    </div>
  )
}
const Flexbox = () => {
  return (
    <Container>
  
      <ProfileBox />
      <p>Fundamentally, Flexbox elements are made of two parts: the container element, and its content</p>
      <p>Flexbox</p>
      
      <h2>Recommended reading</h2>
      <p><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/Flexbox.js">A Complete Guide to Flexbox - css-tricks.com</a></p>
    </Container>
  )
}

export default Flexbox
