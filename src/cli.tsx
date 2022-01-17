import { render } from 'ink';
import meow from 'meow';
import React from 'react';

import App from './App';

const cli = meow(
	`
	Usage
	  $ nic-portfolio

	Examples
	  $ nic-portfolio
`,
	{
		flags: {
			name: {
				type: `string`,
			},
		},
	}
);

render(<App name={cli.flags.name} />);
