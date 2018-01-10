select *
	from projects p 
	join (
			select projects_id, group_concat(t.name) tags from projects_tags pt
			join tags t
            on pt.tags_id = t.id
    group by projects_id
		  ) a 
    on p.id = a.projects_id