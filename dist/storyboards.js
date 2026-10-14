const storyboards = Object.fromEntries(topics.map(t=>[t.id,{title:t.boardTitle,kind:t.kind,edges:t.edges||[],frames:t.frames}]));
