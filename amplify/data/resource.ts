import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
    Rhyme: a.model({
        id: a.id(),
        title: a.string(),
        lyrics: a.string(),
        emojiTranslation: a.string(),
        score: a.integer()
      }),
      User: a.model({
        id: a.id(),
        username: a.string(),
        name: a.string(),
        savedRhymes: a.hasMany('Rhyme', 'id')
      })
    
}).authorization(allow => [allow.publicApiKey()]);

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema
});