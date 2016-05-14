import React, {Component} from 'react';
import { connect } from 'react-redux';
import SourcesDisplay from '../components/sources_display';


function mapStateToProps({ scanData }) {
    return { scanData };
}

export default connect(mapStateToProps)(SourcesDisplay);