import React, {useState} from 'react';
import Pdf from 'react-pdf-js';
import './pdf.css';

export default () => {
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(null);

  const onDocumentComplete = pages => {
    setPages(pages);
  };

  const renderPagination = (page, pages) => {
    if (!pages) {
      return null;
    }

    let previousButton =
      <li
        className="previous"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          setPage(page - 1)
        }}
      >上一页</li>;

    if (page === 1) {
      previousButton = <li className="previous disabled">上一页</li>;
    }

    let nextButton =
      <li
        className="next"
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
          setPage(page + 1)
        }}
      >下一页</li>;

    if (page === pages) {
      nextButton = <li className="next disabled">下一页</li>;
    }

    return (
      <ul className="pager">
        {previousButton}
        <li>共{pages}页,当前第{page}页</li>
        {nextButton}
      </ul>
    );
  };

  const useElementSize = el => {
    const {innerWidth: width, innerHeight: height} = el;
    return {width, height};
  };

  return (
    <div className="pdf">
      {!pages && <span className="loading">Loading...</span>}
      <Pdf
        scale={(useElementSize(window).width - 200) / 960}
        file="./static/wl.pdf"
        onDocumentComplete={onDocumentComplete}
        page={page}
      />
      {renderPagination(page, pages)}
    </div>
  );
};
