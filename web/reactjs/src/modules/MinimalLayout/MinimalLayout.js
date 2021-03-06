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

// React
import React from 'react';
import PropTypes from 'prop-types';

// Materials UI
import { makeStyles } from '@material-ui/styles';

// Local components
import Topbar from './Topbar';
import Footer from './Footer';

// Code body
const useStyles = makeStyles(() => ({
    root: {
        paddingTop: 64,
        height: '100%'
    },
    content: {
        paddingTop: 64
    }
}));

const MinimalLayout = (props) => {
    const { children } = props;

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Topbar />
            <main className={classes.content}>{children}</main>
            <Footer/>
        </div>
    );
};

MinimalLayout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default MinimalLayout;
