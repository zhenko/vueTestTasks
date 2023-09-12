export const IndexedDB = {
  addTask: function (task) {
    const request = indexedDB.open("store", 1);
    let db;

    request.onupgradeneeded = (event) => {
      db = event.target.result;

      // Создание объектного хранилища (Object Store) для задач
      const objectStore = db.createObjectStore("tasks", {
        keyPath: "id",
        autoIncrement: true,
      });

      // Определение структуры объекта данных
      objectStore.createIndex("date", "date", { unique: false });
      objectStore.createIndex("content", "content", { unique: false });
    };

    request.onsuccess = (event) => {
      db = event.target.result;

      const transaction = db.transaction(["tasks"], "readwrite");
      const objectStore = transaction.objectStore("tasks");
      const request = objectStore.add(task);

      request.onsuccess = () => {
        console.log("Задача добавлена в базу данных.");
      };

      request.onerror = () => {
        console.error("Ошибка при добавлении задачи в базу данных.");
      };
    };
  },
  async getTasks() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("store", 1);
      let db;

      request.onupgradeneeded = (event) => {
        db = event.target.result;

        // Создание объектного хранилища (Object Store) для задач
        const objectStore = db.createObjectStore("tasks", {
          keyPath: "id",
          autoIncrement: true,
        });

        // Определение структуры объекта данных
        objectStore.createIndex("date", "date", { unique: false });
        objectStore.createIndex("content", "content", { unique: false });
      };

      request.onsuccess = (event) => {
        db = event.target.result;

        const transaction = db.transaction(["tasks"], "readonly");
        const objectStore = transaction.objectStore("tasks");
        const getAllRequest = objectStore.getAll();

        getAllRequest.onsuccess = () => {
          // Получите задачи из IndexedDB и передайте их обратно через resolve
          const tasksFromDB = getAllRequest.result;
          resolve(tasksFromDB);
        };

        getAllRequest.onerror = (error) => {
          // В случае ошибки передайте ее через reject
          reject(error);
        };
      };
    });
  },
};
