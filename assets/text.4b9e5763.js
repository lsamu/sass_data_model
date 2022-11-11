const A="data:image/png;base64,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";export{A as default};