const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

type CommentData = {
    id: number;
    email: string;
};

const getData = async (url: string): Promise<CommentData[]> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Ошибка сети");
    }
    return response.json();
};

getData(COMMENTS_URL)
    .then((data) => {
        data.forEach((comment: CommentData) => {
            console.log(`ID: ${comment.id}, Email: ${comment.email}`);
        });
    })
    .catch((error) => {
        console.error("Ошибка получения данных:", error);
    });
