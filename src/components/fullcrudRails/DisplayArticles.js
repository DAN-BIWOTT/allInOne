import React from 'react';

const DisplayArticles = ({ptitle,pbody}) =>
{  console.log(ptitle);
    return(
        <div>
            <tr>
                <td>{ptitle}</td>
                <td><p>{pbody}</p></td>
            </tr>
        </div>
    );
}

export default DisplayArticles;