import React from 'react';
import {Tag} from '@shopify/polaris';

import './TagList.css';

export default function TagList(props) {
  return (
    <div className="TagList">
      {props.tags.map((tag, index) => (
        <Tag
          /**
           * A "key" is a special string attribute you need to include when creating lists of elements
           * Keys help React identify which items have changed, are added, or are removed.
           */
          key={index}
          onRemove={() => props.onRemove(index)}
        >
          {tag}
        </Tag>
      ))}
    </div>
  );
}
