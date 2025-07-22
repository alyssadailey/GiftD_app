import { useAuth } from '../../contexts/AuthContext';
// import ActivityItem from '../components/ActivityItem';
// import FriendSelector from '../components/FriendSelector';
// import ProfileSection from '../components/ProfileSection';
// import ProgressBar from '../components/ProgressBar';
// import ExperienceCard from '../components/ExperienceCard';
import './css/Home.css'; // Import your CSS file if needed for global styles

const Home = () => {
  const { user, logout } = useAuth();

  // Sample data - you'll replace this with real data from your backend

  // const friends = [
  //   { id: 1, name: 'Emily' },
  //   { id: 2, name: 'Corrina' },
  //   { id: 3, name: 'Joanna' }
  // ];

  // const emilyProfile = {
  //   name: 'Emily',
  //   candy: ['Herd Clusters', 'peach rings'],
  //   flowers: ['White roses', 'daisies'],
  //   interests: ['Baking', 'Reading', 'Beauty']
  // };

  // const activities = [
  //   {
  //     id: 1,
  //     name: 'Joanne',
  //     activity: 'Cooking class in Greece to celebrate my graduation!',
  //     reason: '',
  //     goalAmount: 100
  //   },
  //   {
  //     id: 2,
  //     name: 'Emily',
  //     activity: 'Dolphin Cruise',
  //     reason: 'For our honeymoon to Cancun!',
  //     goalAmount: 140
  //   }
  // ];

  return (
    <div className="home-container">
      {user ? (
        <>
          <div className="header-section">
            <h1>GOOD MORNING, {user.name.toUpperCase()}!</h1>
            <button onClick={logout} className="logout-button">
              Logout
            </button>
          </div>

          <div className="birthday-notice">
            <p><strong>Emily's Birthday is in 2 Days</strong></p>
            <button className="add-experience-btn">Add an experience</button>
          </div>

          <section className="friends-activities">
            <h2>Friends' Recent Activities</h2>
            {/* {activities.map(activity => (
              <ActivityItem
                key={activity.id}
                name={activity.name}
                activity={activity.activity}
                reason={activity.reason}
                goalAmount={activity.goalAmount}
              />
            ))} */}
          </section>

          {/* <FriendSelector friends={friends} /> */}

          {/* <ProfileSection profile={emilyProfile} /> */}

          <section className="wishlists">
            <h2>Wishlists</h2>
            <h3>Experiences to Support</h3>
            {/* {activities.map(activity => (
              <ExperienceCard
                key={activity.id}
                title={activity.activity}
                description={activity.reason}
                currentAmount={activity.goalAmount * 0.3} // Example: 30% funded
                goalAmount={activity.goalAmount}
              />
            ))} */}
            <p className="ai-suggestion">
              Not sure what to gift? Use our AI to analyze a profile to inspire thoughtful gifts!
            </p>
          </section>
        </>
      ) : (
        <div className="guest-welcome">
          <h1>Welcome to GiftD 🎁</h1>
          <p className="home-subtitle">
            Plan, save, and discover gifts for every occasion.
          </p>
          <div className="auth-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;