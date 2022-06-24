import { CARD_TYPES } from '../app/constants.js';

export const participant = {
    id: '10000001055486',
    account: '12122435',
    shares: '1230000'
};

export const candidatesRevision = [
    { id: 0, name: 'Кандидат Номер Раз' },
    { id: 1, name: 'Кандидат Номер Два' },
    { id: 2, name: 'Кандидат Номер Три' },
    { id: 3, name: 'Кандидат Номер Четыре' },
    { id: 4, name: 'Кандидат Номер Пять' },
];

export const directorsCumulative = [
    { id: 0, name: 'Кандидат Номер Раз' },
    { id: 1, name: 'Кандидат Номер Два' },
    { id: 2, name: 'Кандидат Номер Три' },
    { id: 3, name: 'Кандидат Номер Четыре' },
    { id: 4, name: 'Кандидат Номер Пять' },
];

export const questions = [
    {
        id: 1,
        orderText: 'Первый вопрос',
        title: 'Утверждение годовой бухгалтерской (финансовой) очетности Общества.',
        subtitle: 'Утверждение годовой бухгалтерской (финансовой) очетности Общества.',
        type: CARD_TYPES.CARD_UNDEFINED,
        maxVotes: 1,
    },
    {
        id: 2,
        orderText: 'Второй вопрос',
        title: 'Избрание членов совета директоров',
        subtitle: 'Избрание членов совета директоров',
        type: CARD_TYPES.CARD_SIMPLE,
        maxVotes: 1,
    },
    {
        id: 3,
        orderText: 'Третий вопрос',
        title: 'Избрание членов Ревизионной комиссии',
        subtitle: 'Избрание членов Ревизионной комиссии',
        type: CARD_TYPES.CARD_REVISION,
        maxVotes: candidatesRevision.length,
    },
    {
        id: 4,
        orderText: 'Четвертый вопрос',
        title: 'Избрание членов Совета директоров. Куммулятивное голосование',
        subtitle: 'Избрание членов Совета директоров. Куммулятивное голосование',
        type: CARD_TYPES.CARD_CUMULATIVE,
        maxVotes: 1,
    },
];


export default participant;
