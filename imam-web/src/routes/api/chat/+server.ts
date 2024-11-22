import { 
    OPENAI_ENDPOINT, 
    OPENAI_API_KEY, 
    OPENAI_DEPLOYMENT_NAME, 
    OPENAI_DEPLOYMENT_VERSION 
} from '$env/static/private';
import { error } from '@sveltejs/kit';
import type {
    ChatCompletion,
    ChatCompletionCreateParamsStreaming,
  } from "openai/resources/index";
import { AzureOpenAI } from "openai";

export type MessageBody = { messages: { role: "user" | "assistant", content: string }[] }

function getClient(): AzureOpenAI {
    return new AzureOpenAI({
        endpoint: OPENAI_ENDPOINT,
        apiKey: OPENAI_API_KEY,
        apiVersion: OPENAI_DEPLOYMENT_VERSION,
        deployment: OPENAI_DEPLOYMENT_NAME
    });
}

function createMessages(msg: MessageBody): ChatCompletionCreateParamsStreaming {
    return {...msg, model: "", n: 1, stream: true};
}

export const POST = async ({ request }) => {
    const body: MessageBody = await request.json();

    if (!body) throw error(400, 'Missing Data');
    const client = getClient();
    const messages = createMessages(body);
    const stream = await client.chat.completions.create(messages);

    let readableStream = stream.toReadableStream() as ReadableStream<any>;

    // Create and return a response of the readable stream
    return new Response(readableStream, {
        headers: { 'Content-Type': 'text/plain' },
    });
}