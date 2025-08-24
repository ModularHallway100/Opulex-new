import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {mcp} from '@genkit-ai/mcp';

export const ai = genkit({
  plugins: [
    googleAI(),
    mcp(
      'financialModelingPrep',
      'https://server.smithery.ai/@imbenrabi/financial-modeling-prep-mcp-server/mcp'
    ),
    mcp('ynab', 'https://server.smithery.ai/@calebl/ynab-mcp-server/mcp'),
    mcp(
      'yahooFinance',
      'https://server.smithery.ai/@hwangwoohyun-nav/yahoo-finance-mcp/mcp'
    ),
    mcp(
      'sequentialThinking',
      'https://server.smithery.ai/@smithery-ai/server-sequential-thinking/mcp'
    ),
    mcp(
      'browserbase',
      'https://server.smithery.ai/@browserbasehq/mcp-browserbase/mcp'
    ),
    mcp('mem0', 'https://server.smithery.ai/@big-omega/mem0-mcp/mcp'),
  ],
  model: 'googleai/gemini-1.5-flash-preview',
});
