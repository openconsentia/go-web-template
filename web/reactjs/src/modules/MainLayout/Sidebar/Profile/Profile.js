// Copyright 2020 [reatjs-desktop] Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: 'fit-content'
    },
    avatar: {
        width: 60,
        height: 60
    },
    name: {
        marginTop: theme.spacing(1)
    }
}));

const Profile = props => {
    const { className, ...rest } = props;
    const classes = useStyles();

    const userProfile = {
        avatar: '/images/avatars/avatar.png',
        bio: 'Bio'
    };

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Avatar
                alt="Person"
                className={classes.avatar}
                component={RouterLink}
                src={userProfile.avatar}
                to="/settings"
            />
            <Typography
                className={classes.name}
                variant="h4"
            >
            </Typography>
            <Typography variant="body2">{userProfile.bio}</Typography>
        </div>
    );
};

Profile.propTypes = {
    displayName: PropTypes.string,
    className: PropTypes.string
};

export default Profile;