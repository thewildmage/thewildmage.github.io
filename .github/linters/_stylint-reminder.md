# Stylelint Config Reminders

For my future self, so I'll stop forgetting why exactly I added certain settings to [`.stylelintrc.json`](.stylelintrc.json).

## `custom-property-empty-line-before`

Turning off this setting enables me to group custom properties however I see fit, which is especially beneficial in cases like:

```css
.blah {
	--color-a: pink;
	--color-b: teal;

	--size-400: 1rem;
}
```

The gap between variables is made clear by the change in naming convention. Adding a comment about the `--size-400` variable here, as was required when this rule was turned on, just creates excess fluff.

## `order/order`

This used to just include `custom-properties` and `declarations`, but `at-rules` and `rules` are now included becaues native CSS nesting is coming. The order of these last two may need adjustment, but was set as written here to keep media queries as close as possible to the rulesets they modify.

## `declaration-colon-newline-after`

Conflicts with Prettier. For example, the following is as formatted by Prettier, but will trip an error on any but the `null` configuration of this rule:

```css
.conflict {
	--utopia-type-200-slope: (
		(var(--type-200-max) - var(--type-200-min)) / var(--utopia-run)
	);
}
```
