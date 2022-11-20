import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    "Best Match": 'best_match',
    "Highest Rated": 'rating',
    "Most Reviewed" : 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
                let sortByOptionsValue = sortByOptions[sortByOption];
                return <li key={sortByOptionsValue}> {sortByOption} </li>
            }
        );
    }
}