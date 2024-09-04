import './Table.css';

const Table = () => {
    return (
        <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header_Info">
                  <div>companySigDate</div>
                  <div>companySignatureName</div>
                  <div>documentName</div>
                  <div>documentStatus</div>
                  <div>documentType</div>
                  <div>employeeNumber</div>
                  <div>employeeSigDate</div>
                  <div>employeeSignatureName</div>
                </div>
              </div>
              <div className="col-3">
                <div className="header_buttons">
                  <button>Обновить</button>
                  <button>Создать</button>
                  <button>Выйти</button>
                </div>

              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="table">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </div>
              </div>
              <div className="col-3">
                <div className="table_buttons">
                  <button>Изменить</button>
                  <button>Отправить</button>
                  <button>Удалить</button>
                </div>
              </div>
            </div>
          </div>        
    )
};

export default Table;