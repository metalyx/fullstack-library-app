export const unexpectedError = (res, e = {}) => {
    if (res) {
        return res.status(500).json({ error: 'Unexpected server error', ...e });
    }
};

export const showError = (res, errorMessage) => {
    if (res) {
        return res.status(400).json({ error: errorMessage });
    }
};
