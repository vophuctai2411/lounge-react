import Header from "../../components/header";
import search_icon from "../../assets/icons/search.svg";
import profile_icon from "../../assets/icons/profile.svg";
import "./index.scss";

function Community() {
  return (
    <div className="community">
      <Header>
        <div className="header-icons">
          <img src={search_icon} alt="search icon" />
          <img src={profile_icon} alt="profile icon" />
        </div>
      </Header>
      this is community page
    </div>
  );
}

export default Community;
