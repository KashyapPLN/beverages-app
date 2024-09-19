import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './profile.css';
import { Col, Row } from "react-bootstrap";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const [formData, setFormData] = useState({
    name: '',
    phone:'',
    address: {
      line1: '',
      line2: '',
      line3: '',
      pin: ''
    },
  });

  const [isLoading, setIsLoading] = useState(true);

  // Load user details from Auth0 and populate the form
  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'read:current_user',
        });

        const response = await fetch(`https://${domain}/api/v2/users/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userDetails = await response.json();

        // Populate form data from user metadata
        setFormData({
          name: userDetails.user_metadata?.name || '',
          phone: userDetails.user_metadata?.phone || '',
          address: {
            line1: userDetails.user_metadata?.address?.line1 || '',
            line2: userDetails.user_metadata?.address?.line2 || '',
            line3: userDetails.user_metadata?.address?.line3 || '',
            pin: userDetails.user_metadata?.address?.pin || '',
          },
        });
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setIsLoading(false);
      }
    };

    if (user) {
      getUserDetails();
    }
  }, [getAccessTokenSilently, user, domain]);

  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };

  const handlePhoneChange = (e) => {
    setFormData({
      ...formData,
      phone: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (
      formData.name !== '' &&
      formData.phone !== '' &&
      formData.address.pin !== '' &&
      formData.address.line1 !== ''
    ) {
      try {
        // Get the access token
        const token = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: 'update:users',
        });

        // Call the function to update user metadata
        await updateUserMetadata(user.sub, token, formData);

        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Error updating profile:', error);
        alert('Failed to update profile');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const updateUserMetadata = async (userId, token, metadata) => {
    try {
      const response = await fetch(`https://${domain}/api/v2/users/${userId}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_metadata: metadata,
        }),
      });

      if (response.ok) {
        console.log('User metadata updated successfully!');
      } else {
        const error = await response.json();
        console.error('Failed to update user metadata:', error);
      }
    } catch (error) {
      console.error('Error updating user metadata:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    isAuthenticated && (
      <div>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} md={4}>
              <div className='user-profile-form'>
                <div className='user-profile-name'>
                  <label htmlFor='profile-name'>Name</label>
                  <input
                    id='profile-name'
                    placeholder="Enter Name"
                    className='profile-form-input'
                    type='text'
                    value={formData.name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className='user-profile-phone'>
                  <label htmlFor='phone'>Phone Number</label>
                  <input
                    id='phone'
                    placeholder="Enter Phone Number"
                    className='profile-form-input'
                    type='text'
                    value={formData.phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className='user-profile-address'>
                  <label htmlFor='profile-address'>Address</label>
                  <div id='profile-address'>
                    <input
                      id='address-line-1'
                      placeholder="Address Line 1"
                      className='profile-form-input'
                      type='text'
                      value={formData.address.line1}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: { ...formData.address, line1: e.target.value },
                        })
                      }
                    />
                    <input
                      id='address-line-2'
                      placeholder="Address Line 2"
                      className='profile-form-input'
                      type='text'
                      value={formData.address.line2}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: { ...formData.address, line2: e.target.value },
                        })
                      }
                    />
                    <input
                      id='address-line-3'
                      placeholder="Address Line 3"
                      className='profile-form-input'
                      type='text'
                      value={formData.address.line3}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: { ...formData.address, line3: e.target.value },
                        })
                      }
                    />
                    <section className="user-profile-pincode">
                      <label htmlFor='pin-code'>Pin code</label>
                      <input
                        id='pin-code'
                        placeholder="Enter pin code"
                        className='profile-form-input'
                        type='text'
                        value={formData.address.pin}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: { ...formData.address, pin: e.target.value },
                          })
                        }
                      />
                    </section>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className='profile-update-btn-div'>
            <button className='login profile-update-btn'>Update</button>
          </div>
        </form>
      </div>
    )
  );
};

export default Profile;
