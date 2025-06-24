export const saveGameResult = (result) => {
const results = getGameResults();
results.push({
...result,
timestamp: new Date().toISOString(),
id: Date.now()
});
localStorage.setItem('travelGameResults', JSON.stringify(results));
};

export const getGameResults = () => {
const stored = localStorage.getItem('travelGameResults');
return stored ? JSON.parse(stored) : [];
};

export const clearGameResults = () => {
localStorage.removeItem('travelGameResults');
};