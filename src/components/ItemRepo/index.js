import React, { useState } from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo}) {

const [show, setShow] = useState(true);

const handleRemove = () => {
setShow(false);
}

return show ? (
<ItemContainer>
<h3>{repo.name}</h3>
<p>{repo.full_name}</p>
<a href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</a><br />
<a href="#" onClick={handleRemove} rel="noreferrer" className="remover">Remover</a>
<hr />
</ItemContainer>
): null
}

export default ItemRepo;