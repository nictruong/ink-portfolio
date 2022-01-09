import { render } from 'ink';
import meow from 'meow';
import React from 'react';

import App from './App';

const cli = meow(
	`
	Usage
	  $ ink-portfolio

	Options
		--name  Your name

	Examples
	  $ ink-portfolio --name=Jane
	  Hello, Jane
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
