import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'

const ProfileExperience = ({experience:{school, degree, fieldofstudy, current, to, from, description}}) => 
    
        <div>
            <h3 className="text-dark">{school}</h3>
            <p>
                <Moment format='YYYY/MM/DD'>{from}</Moment> - {!to ? ' Now' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
            </p>
            <p>
                <strong>Degree:</strong> {degree}
            </p>
            <p>
                <strong>Description:</strong> {description}
            </p>
            <p>
                <strong>Field of Study:</strong> {fieldofstudy}
            </p>
        </div>



ProfileExperience.propTypes = {
experience: PropTypes.array.isRequired,
}

export default ProfileExperience
