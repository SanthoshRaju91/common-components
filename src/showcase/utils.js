import namor from 'namor';

function newData() {
    const onlinePredict = Math.random();

    return {
        name: namor.generate({ words: 1, numbers: 0}),
        age: Math.floor(Math.random() * 30),
        status: onlinePredict > 0.66 ? 'Online' : 'Offline',
        visits: Math.floor(Math.random() * 100)
    }
};

function generateDataSet(size = 50) {
    let dataSet = [];

    for(let i =0; i<size; i++) {
        dataSet.push(newData());
    }

    return dataSet;
}

export default generateDataSet;